import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ClrWizard} from '@clr/angular';
// import * as _ from 'lodash';
import pick from 'lodash-es/pick';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent implements OnInit, OnChanges {

  productForm: FormGroup;
  @Input() product;
  @Output() finish = new EventEmitter();
  @ViewChild('productWizard', {static: false}) productWizard: ClrWizard;

  deviceType = 'tablet';
  deviceTypes = [{
    name: 'Tablet',
    icon: 'tablet',
  }, {
    name: 'Laptop',
    icon: 'computer'
  }, {
    name: 'Phone',
    icon: 'mobile'
  }, {
    name: 'Monitor',
    icon: 'display'
  }];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      basic: fb.group({
        name: ['', Validators.required],
        description: '',
        active: false,
        features: fb.array([
          fb.control('')
        ])
      }),
      expiration: fb.group({
        expirationDate: [null,
          Validators.compose([Validators.required,
            this.minDateValidation(new Date())])]
      })
    });
  }

  ngOnInit(): void {
    if (this.product) {
      this.productForm.setValue({
        basic: {
          ...pick(this.product, ['name', 'description',
            'active']),
          features: this.product.features || [''],
        },
        expiration: {
          ...pick(this.product, ['expirationDate']),
        }
      });
      this.deviceType = this.product.type;
    }
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  get basicFeatures(): FormArray {
    return this.productForm.get('basic.features') as FormArray;
  }

  get expirationError(): string {
    if
    (this.productForm.get('expiration.expirationDate').hasError('required')) {
      return 'This Field is Required!';
    }
    if
    (this.productForm.get('expiration.expirationDate').hasError('minDateValidation')) {
      return 'Expiration should be after today\'s date';
    }
  }

  get isBasicInvalid(): boolean {
    return this.productForm.get('basic').invalid;
  }

  selectDevice(device): void {
    this.deviceType = device.icon;
  }

  handleClose(): void {
    this.finish.emit();
    this.close();
  }

  close(): void {
    this.productForm.reset();
    this.deviceType = 'tablet';
    this.productWizard.goTo(this.productWizard.pageCollection.pages.first.id);
    this.productWizard.reset();
  }

  handleFinish(): void {
    this.finish.emit({
      product: {
        type: this.deviceType,
        ...this.productForm.get('basic').value,
        ...this.productForm.get('expiration').value,
      }
    });
    this.close();
  }

  addFeature(): void {
    this.basicFeatures.push(this.fb.control(''));
  }

  minDateValidation(date: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = new Date(control.value) < date;
      return forbidden ? {minDateValidation: {value: control.value}}
        : null;
    };
  }
}
