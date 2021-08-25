import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import cc from 'currency-codes'
import { Autocomplete } from '@material-ui/lab'
import { createStyles, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'inline-flex',
      borderRadius: '5px',
      textAlign: 'center',
      border: '1px solid grey',
      '& :last-child': {
        borderRight: 'none'
      },
      '& div': {
        minWidth: '80px',
        padding: '10px',
        borderRight: '1px solid grey'
      }
    },
    currency: {}
  })
)
const SelectCountry = () => {
  const classes = useStyles()
  const currencies = useSelector((state: RootState) => state.currency.currencies)


  const listCurrencies = useMemo(() => {
    return currencies.reduce<any[]>((acc, country) => {
      const data = cc.number(country.code.toString())
      if (!!data) {
        return [...acc, {
          currency: data.currency,
          code: data.code
        }]
      }

      return acc
    }, [])
  }, [currencies])

  return (
    <div>
      Currency I Have:
      <div className={classes.root}>{listCurrencies.slice(0, 4).map((el) => {
        return (
          <div className={classes.currency}>
            {el.code}
          </div>
        )
      })}
      </div>
      <br />
      Currency I Want:
      <div className={classes.root}>{listCurrencies.slice(0, 4).map((el) => {
        return (
          <div className={classes.currency}>
            {el.code}
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default SelectCountry
