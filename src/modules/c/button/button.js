import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
  @api label = 'Button';
  @api variant = 'brand';
  @api disabled = false;
  @api iconName;
  @api iconPosition = 'left';
}
