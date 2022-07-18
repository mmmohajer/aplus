import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../ListItem.module.scss';

const items = [
  { Subject: 'ساپورت اعضای خانواده (اقامت دائم)', Index: '1' },
  { Subject: 'ویزاهای توریستی، والدین و تحصیلی', Index: '2' },
  { Subject: 'سرمایه گذاری فدرال و ایالتی (اقامت دائم)', Index: '3' },
  { Subject: 'خود اشتغالی (اقامت دائم)', Index: '4' },
  { Subject: 'مهارت کاری (اقامت دائم)', Index: '5' },
  { Subject: 'پناهندگی', Index: '6' },
  { Subject: 'ترجمه رسمی کامل مدارک (حقوقی)', Index: '7' },
  { Subject: 'دعوتنامه و تنظیم دعوتنامه', Index: '8' }
];

const Farsi = () => {
  return (
    <>
      <div className="row--12 row--sm--9 row--md--6 row--lg--6 ml-auto mr-auto br-px-rad-10 flex flex--jc--center flex--ai--center flex--dir--col p2 listItem_container">
        <h2 className="mb2">قبول مکالمه با تعیین وقت قبلی</h2>
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
          برای اطلاعات بیشتر به{' '}
          <a target="_blank" href="https://www.canada.ca/en/services/immigration-citizenship.html">
            سایت مهاجرت کانادا
          </a>{' '}
          مراجعه نمایید
        </p>
      </div>
    </>
  );
};

export default Farsi;
