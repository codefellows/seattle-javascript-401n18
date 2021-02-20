import React from 'react';
import Modal from '../components/modal/index.js';
import { If, Then, Else } from '../components/if/index.js';

// But let's be more verbose, anyway.
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <section>
        <If condition={this.state.open}>
          <Then>
            <Modal title="Pop Up" close={this.toggleModal}>
              <div>
                This is a modal!
              </div>
            </Modal>
          </Then>
          <Else>
            <button onClick={this.toggleModal}>Open Modal</button>
          </Else>
        </If>
      </section>

    );
  }

}

export default HomePage;
