import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Column, Div, Row, Image, Text, Paragraph } from 'basedesign-iswad';

import AboutImage from 'Images/js-Images/general/behzad-modified-2.jpg';
import styles from './About.module.scss';

const About = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Div className={cx('bgInverse pb4 pt4', styles.about)}>
        <Div type="flex" hAlign="center" className="h1 mb3">
          {language === 'en' ? 'About Us' : 'درباره ما'}
        </Div>
        <Row className={cx(language === 'fa' && styles.row)}>
          <Column xs={12} sm={12} md={12} lg={6}>
            <Div
              className={cx(
                'flex flex--ai--center flex--dir--col text-justify',
                language === 'en' ? styles.textEnContainer : styles.textFaContainer
              )}>
              {language === 'en' ? (
                <>
                  <Paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages.
                  </Paragraph>
                  <Paragraph>
                    and more recently with desktop p orem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop.
                  </Paragraph>
                </>
              ) : (
                <Div className="text-rtl">
                  <Paragraph>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                    طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                    ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                    طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                    در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                    سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </Paragraph>
                  <Paragraph>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                    طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                    ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                    طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                    در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  </Paragraph>
                </Div>
              )}
            </Div>
          </Column>
          <Column xs={12} sm={12} md={12} lg={6} className={cx('flex flex--jc--center')}>
            <Image src={AboutImage} className={cx(styles.aboutImage)} />
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default About;
