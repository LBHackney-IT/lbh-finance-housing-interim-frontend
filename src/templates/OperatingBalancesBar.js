import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CSVLink } from 'react-csv'
import { getCSVData } from '../routes/Api'
import DatePicker from 'react-date-picker'

const OperatingBalancesBar = ({ searching, startDate, setStartDate, endDate, setEndDate }) => {

  const [csvData, setCSVData] = useState(null)
  const csvLinkRef = useRef()

  const getData = useCallback(async () => {
    const data = await getCSVData({ startDate, endDate })
    setCSVData(data)
  }, [endDate, startDate])

  useEffect(() => {
    if( csvData && csvLinkRef.current.link ) {
      setTimeout(() => {
        csvLinkRef.current.link.click()
        setCSVData(null)
      })
    }
  }, [csvData])

  return <div className="date-range-search-bar">
    <div className="bar-component-cont">
      <label className="govuk-label govuk-date-input__label">Start:</label>
      <DatePicker
        disabled={searching}
        clearIcon={null}
        onChange={setStartDate}
        value={startDate}
        format="dd-MM-y"
      />
      <label className="govuk-label govuk-date-input__label">End:</label>
      <DatePicker
        disabled={searching}
        clearIcon={null}
        onChange={setEndDate}
        value={endDate}
        format="dd-MM-y"
      />
    </div>

    <button 
      onClick={getData}
      className="govuk-button govuk-secondary lbh-button lbh-button--secondary"
      style={{ marginTop: 0 }}
    >Export CSV</button>

    { csvData && <CSVLink
      data={csvData}
      ref={csvLinkRef}
      filename={`Finance balances produced ${new Date().toLocaleString()}.csv`}
    /> }

  </div>
}

export default OperatingBalancesBar