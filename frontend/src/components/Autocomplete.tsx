import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]
export interface Person {
  name: string;
}
export const ClassesAutocomplete = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
<div className={"mt-5 focus-within:ring-2 focus-within:ring-blue-500 shadow-xl"}>
<Combobox value={selectedPerson} onChange={setSelectedPerson}>
    <div className={"flex items-center bg-gray-100 px-3"}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)}
                        displayValue={(person: Person) => person?.name ?? ''}
                        className={"bg-gray-100 w-full py-2 px-3 outline-none"}
                        autoComplete={"off"}
        />
    </div>

    <Combobox.Options>
        {filteredPeople?.map((person) => (
            <Combobox.Option key={person} value={person}
                             className="py-2 px-3 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-800">
                {person}
            </Combobox.Option>
        ))}
    </Combobox.Options>
</Combobox>
</div>
  )
}

