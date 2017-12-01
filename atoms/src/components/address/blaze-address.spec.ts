import { flush, render } from '@stencil/core/testing';
import { Address } from './blaze-address';
import { AddressHeading } from './blaze-address-heading';

describe('Address', () => {
  it('should build', () => {
    expect(new Address()).toBeTruthy();
  });

  describe('renders', () => {
    let element;

    const snapIt = (name, html) => {
      it(name, async () => {
        element = await render({
          components: [Address, AddressHeading],
          html
        });
        await flush(element);

        expect(element).toMatchSnapshot();
      });
    };

    snapIt(
      'renders correctly',
      '<blaze-address>Address line one</blaze-address>'
    );

    snapIt(
      'renders the address heading correctly',
      `<blaze-address>
        <blaze-address-heading>Address header</blaze-address-heading>
        Address line one<br />
        Address line two<br />
        Postcode
      </blaze-address>`
    );
  });
});
