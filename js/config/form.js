import { ssnConfig } from 'us-forms-system/lib/js/definitions/ssn';
import { dateConfig } from 'us-forms-system/lib/js/definitions/date';
import { dateRangeConfig } from 'us-forms-system/lib/js/definitions/dateRange';
import { currencyConfig } from 'us-forms-system/lib/js/definitions/currency';

import Introduction from '../components/Introduction.jsx';

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
            ssn: ssnConfig.uiSchema,
            date: dateConfig.uiSchema(),
            dateRange: dateRangeConfig.uiSchema(),
            currency: currencyConfig.uiSchema('Currency')
          },
          schema: {
            type: 'object',
            properties: {
              ssn: ssnConfig.schema,
              date: dateConfig.schema,
              dateRange: dateRangeConfig.schema,
              currency: currencyConfig.schema
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
