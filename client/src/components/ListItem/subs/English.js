import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../ListItem.module.scss';

const items = [
  { Subject: 'Family Sponsorship', Index: '1' },
  { Subject: 'VISA (Tourisem/Work/Super Visa)', Index: '2' },
  { Subject: 'Startup Visa', Index: '3' },
  { Subject: 'Investments / ENTR', Index: '4' },
  { Subject: 'Care Giver', Index: '5' },
  { Subject: 'Self Employed', Index: '6' },
  { Subject: 'Skilled Worker', Index: '7' }
];

const English = () => {
  return (
    <>
      <div className="row--12 row--sm--9 row--md--6 row--lg--6 ml-auto mr-auto br-px-rad-10 flex flex--jc--center flex--ai--center flex--dir--col p2 listItem_container">
        <h2 className="mb2">By appointments only</h2>
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.Index}
                className="flex flex--jc--start flex--ai--center mb2 bgRed p2 listItem_item">
                <span className="flex flex--jc--center flex--ai--center br-per-rad-50 w-px-40 box-px-40 mr2 listItem_item_index">
                  {item.Index}
                </span>
                {item.Subject}
              </li>
            );
          })}
        </ul>
        <p>
          For more information visit{' '}
          <a target="_blank" href="https://www.canada.ca/en/services/immigration-citizenship.html">
            Canada Immigration Website
          </a>
        </p>
      </div>
    </>
  );
};

export default English;
