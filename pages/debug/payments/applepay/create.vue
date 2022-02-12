<template>
    <v-btn
        elevation="24"
        dark
        class="apple-pay-button apple-pay-button-text-pay"
        v-on="on"
        @click.prevent="makeApiCall"
        >
    </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class CreateApplePay extends Vue {
    mounted() {
      let recaptchaScript = document.createElement('script')
      //recaptchaScript.setAttribute('window.a', 'https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js")
      //document.head.appendChild(recaptchaScript)
      window
    }

    async makeApiCall() {
    }


    class ApplePaySessionStub extends Emitter {
    constructor(version, paymentRequest) {
        super();
        this.version = version;
        this._request = paymentRequest;
    }

    // Static Stub configuration

    static get stubCanMakePayments() {
        return this._stubCanMakePayments;
    }

    static set stubCanMakePayments(value) {
        this._stubCanMakePayments = value;
    }

    static get stubCanMakePaymentsWithActiveCard() {
        return this._stubCanMakePaymentsWithActiveCard;
    }

    static set stubCanMakePaymentsWithActiveCard(value) {
        this._stubCanMakePaymentsWithActiveCard = value;
    }

    static set stubExecuteAfterMerchantValidation(callback) {
        this._stubExecuteAfterMerchantValidation = callback;
    }

    static get stubExecuteAfterMerchantValidation() {
        return this._stubExecuteAfterMerchantValidation;
    }

    // Static Apple Pay JS interface

    static canMakePayments() {
        return this._stubCanMakePayments;
    }

    static canMakePaymentsWithActiveCard(merchantIdentifier) {
        return Promise.resolve(this.stubCanMakePaymentsWithActiveCard);
    }

    static supportsVersion(version) {
        return true;
    }

    // Instance Apple Pay JS interface

    abort() {}

    begin() {
        let url = 'https://apple-pay-gateway-cert.apple.com/paymentservices/startSession';
        if (this._onvalidatemerchant) {
            this._onvalidatemerchant(
                {validationURL: url}
            );
        }
        var event = new ApplePayValidateMerchantEvent(url);
        this.dispatchEvent(event);
    }

    completeMerchantValidation(merchantSession) {
        if (!ApplePaySession.stubExecuteAfterMerchantValidation) {
            throw "Error: No stubExecuteAfterMerchantValidation() callback set";
        }
        ApplePaySession.stubExecuteAfterMerchantValidation(this);
    }

    completePayment(status) { }

    completePaymentMethodSelection(newTotal, newLineItems) { }

    completeShippingContactSelection(status, newShippingMethods, newTotal, newLineItems) { }

    completeShippingMethodSelection(status, newTotal, newLineItems) { }

    set onvalidatemerchant(value) {
        this._onvalidatemerchant = value;
    }

    // Stub helper methods

    get request() {
        return this._request;
    }

}




}
</script>

<style scoped>
    .apple-pay-button {
        width: 250px;
        height: 40px;
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        cursor: pointer;
    }

    .apple-pay-button-text-pay {
        -apple-pay-button-type: pay;
    }
</style>
