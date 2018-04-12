import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Form from './Form';

const Button = styled.button`
  background: #08a008;
  padding: 8px;
  border: 0;
  color: #ffffff;
`;

const Panel = styled.section`
  padding: 40px;
  background: #f2f5f6;
  height: 100%;
`;

const Board = styled.div`
  padding: 20px 0px;
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 2px 0px 63px -15px rgba(0, 0, 0, 0.75);
  position: relative;
  padding: 25px;
  margin-top: 20px;
  min-height: 250px;
  max-height: 250px;
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 8px;
`;

const Phone = Title.extend``;

const Text = styled.p`
  margin: 0;
`;

const Close = styled.button`
  background: #e62b2b;
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding-top: 20px;
`;

class CallBoard extends React.Component {
  state = {
    modalIsOpen: false,
    notices: [],
  };

  componentWillMount = () => {
    const localNotices = JSON.parse(localStorage.getItem('Notices'));
    this.setState({
      notices: localNotices,
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  addNotice = (notice) => {
    this.setState({
      notices: notice,
    });
  };

  deleteNotice = (id) => {
    const newNotices = this.state.notices.filter(notice => notice.id !== id);
    this.setState({
      notices: newNotices,
    });
    localStorage.setItem('Notices', JSON.stringify(newNotices));
  };

  render() {
    return (
      <Panel>
        <Button onClick={this.openModal}>Добавить</Button>
        <Board className="row">
          {this.state.notices.map(notice => (
            <div className="col-xs-12 col-sm-6 col-md-4" key={notice.id}>
              <Card>
                <Title>{notice.name}</Title>
                <Phone> {notice.phone}</Phone>
                <Text>{notice.descr}</Text>
                <Close onClick={() => this.deleteNotice(notice.id)}>X</Close>
              </Card>
            </div>
          ))}
        </Board>
        <Modal isOpen={this.state.modalIsOpen} ariaHideApp={false} className="Modal">
          <Wrapper>
            <Close onClick={this.closeModal}>X</Close>
            <Form closeModal={this.closeModal} addNotice={this.addNotice} />
          </Wrapper>
        </Modal>
      </Panel>
    );
  }
}

export default CallBoard;
