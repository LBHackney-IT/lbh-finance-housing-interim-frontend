provider "aws" {
  region  = "eu-west-2"
}
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# Cloudfront Distribution
locals {
  interim_finance_origin_id = "interim-finance-solution"
}

terraform {
    backend "s3" {
        bucket  = "terraform-state-housing-staging"
        encrypt = true
        region  = "eu-west-2"
        key     = "services/interim-frontend/state"
    }
}

resource "aws_cloudfront_origin_access_identity" "interim_finance" {
  comment = "Distribution for interim finance frontend"
}

resource "aws_cloudfront_distribution" "interim_finance_distribution" {
  origin {
    domain_name = "lbh-housing-finance-frontend-staging.hackney.gov.uk.s3.amazonaws.com"
    origin_id   = local.interim_finance_origin_id
    connection_attempts = 3
    connection_timeout = 10
    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.interim_finance.cloudfront_access_identity_path}"
    }
  }
  default_root_object = "index.html"
  aliases = ["ifs-staging.hackney.gov.uk"]
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Distribution for interim finance frontend"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.interim_finance_origin_id
    cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["GB"]
    }
  }

  custom_error_response {
      error_caching_min_ttl = 10
      error_code            = 404
      response_code         = 200
      response_page_path    = "/"
    }
    
  custom_error_response {
      error_caching_min_ttl = 60
      error_code            = 403
      response_code         = 200
      response_page_path    = "/"
    }

  tags = {
    Environment = "staging"
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:364864573329:certificate/d903d9e2-c3da-482b-8768-916ec09e461f"
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
