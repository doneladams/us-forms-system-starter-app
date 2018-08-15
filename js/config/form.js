import { ssnConfig } from 'us-forms-system/lib/js/definitions/ssn';
import { dateConfig } from 'us-forms-system/lib/js/definitions/date';
import { dateRangeConfig } from 'us-forms-system/lib/js/definitions/dateRange';
import { currencyConfig } from 'us-forms-system/lib/js/definitions/currency';
import { phoneConfig } from 'us-forms-system/lib/js/definitions/phone';
import { yearConfig } from 'us-forms-system/lib/js/definitions/year';
import { monthYearConfig } from 'us-forms-system/lib/js/definitions/monthYear';
import { monthYearRangeConfig } from 'us-forms-system/lib/js/definitions/monthYearRange';
import { autosuggestConfig } from 'us-forms-system/lib/js/definitions/autosuggest';
import { currentOrPastDateConfig } from 'us-forms-system/lib/js/definitions/currentOrPastDate';
import { currentOrPastMonthYearConfig } from 'us-forms-system/lib/js/definitions/currentOrPastMonthYear';

import Introduction from '../components/Introduction.jsx';

const dateSchema = dateConfig.schema();

const formConfig = {
  title: 'Form',
  subTitle: 'Test',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {
    dateConfig
  },
  chapters: {
    firstChapter: {
      title: 'First Chapter',
      pages: {
        firstPage: {
          path: 'first-chapter/first-page',
          title: 'First Page',
          uiSchema: {
            ssn: ssnConfig.uiSchema(),
            date: dateConfig.uiSchema(),
            dateRange: dateRangeConfig.uiSchema(),
            currency: currencyConfig.uiSchema('Currency'),
            phone: phoneConfig.uiSchema(),
            year: yearConfig.uiSchema(),
            currentOrPastDate: currentOrPastDateConfig.uiSchema(),
            currentOrPastMonthYear: currentOrPastMonthYearConfig.uiSchema(),
            monthYear: monthYearConfig.uiSchema(),
            monthYearRange: monthYearRangeConfig.uiSchema()
          },
          schema: {
            type: 'object',
            properties: {
              ssn: ssnConfig.schema(),
              date: dateConfig.schema(),
              dateRange: dateRangeConfig.schema(),
              currency: currencyConfig.schema(),
              phone: phoneConfig.schema(),
              year: yearConfig.schema(),
              currentOrPastDate: currentOrPastDateConfig.schema(),
              currentOrPastMonthYear: currentOrPastMonthYearConfig.schema(),
              monthYear: monthYearConfig.schema(),
              monthYearRange: monthYearRangeConfig.schema()
            }
          }
        },
        secondPage: {
          path: 'first-chapter/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },
    secondChapter: {
      title: 'Second Chapter',
      pages: {

      }
    }
  }
};

export default formConfig;
