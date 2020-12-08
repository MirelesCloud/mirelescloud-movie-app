import React from 'react'
import { Form, Label, Input, Button } from '../../Styles'

const SearchMovie = () => {
  return (
  <Form>
    <Label htmlFor="query">Movie Name</Label>
    <Input type="text" name="query" placeholder="Saving Private Ryan"/>
    <Button type="submit">Search</Button>

  </Form>
  )
}

export default SearchMovie