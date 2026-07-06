import LightningModal from 'lightning/modal';

export default class DemoModal extends LightningModal {
    handleCancel() {
        this.close();
    }

    handleConfirm() {
        this.close('confirmed');
    }
}
