import React, { useState, useEffect, useRef } from 'react'

const IndividualLookupBar = ({ searching, searchOptions, searchType, search = '', onSearch, onSearchType, onSearchTerm }) => {

  const childTypeRef = useRef()
  const [val, setVal] = useState(search)
  const [type, setType] = useState(searchType)

  useEffect(() => { onSearchType(type) }, [onSearchType, type])
  useEffect(() => { onSearchTerm(val) }, [search, val])
  
  return <div className="find-property-search-bar">
    <div className="govuk-form-group lbh-form-group lbh-search-box">
      <select 
        disabled={searching}
        value={searchType} 
        onChange={e => setType(e.target.value)}
        className="govuk-select lbh-select"
      >{ searchOptions.map(opt => { 
        return <option key={opt.value} value={opt.value}>{opt.text}</option> 
      }) }</select>

      <input
        onChange={e => setVal(e.target.value)}
        className="govuk-input lbh-input govuk-input--width-10"
        name='propSearchInput'
        value={val}
        type={searching ? 'disabled' : 'text'}
        ref={childTypeRef}
        placeholder='0123456789'
        onKeyPress={e => e.key === 'Enter' && onSearch(val) }
      />
      <button onClick={() => onSearch(val)} className="lbh-search-box__action">
        <span className="govuk-visually-hidden">Search</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.6999 10.6C12.0747 10.6 13.9999 8.67482 13.9999 6.3C13.9999 3.92518 12.0747 2 9.6999 2C7.32508 2 5.3999 3.92518 5.3999 6.3C5.3999 8.67482 7.32508 10.6 9.6999 10.6ZM9.6999 12.6C13.1793 12.6 15.9999 9.77939 15.9999 6.3C15.9999 2.82061 13.1793 0 9.6999 0C6.22051 0 3.3999 2.82061 3.3999 6.3C3.3999 9.77939 6.22051 12.6 9.6999 12.6Z"
            fill="#0B0C0C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.70706 10.7071L1.70706 15.7071L0.292847 14.2929L5.29285 9.29289L6.70706 10.7071Z"
            fill="#0B0C0C"
          />
        </svg>
      </button>
    </div>

  </div>
}
export default IndividualLookupBar
