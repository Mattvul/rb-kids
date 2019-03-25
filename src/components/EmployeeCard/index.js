import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import { HTMLContent } from '../../components/Content'

const EmployeeCard = ({
  avatar,
  name,
  role,
  email,
  phone,
  body
}) => (
  <li className="employee-card">
    <figure className="avatar">
      <img src={avatar} />
    </figure>
    <aside>
      <h2>{role}</h2>
      <h3>{name}</h3>
      <ul className="details-card">
        {email ? <li><FontAwesomeIcon icon={faEnvelope} /> {email}</li> : null}
        {phone ? <li><FontAwesomeIcon icon={faPhone} /> {phone}</li> : null}
      </ul>
      <HTMLContent content={body} />
    </aside>
  </li>
)

export default EmployeeCard
