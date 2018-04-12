import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const Name = styled.input`
  margin: 5px;
  padding: 8px;
`;

const NoticeForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  height: 80%;
`;

const Mobile = styled(InputMask)`
  margin: 5px;
  padding: 8px;
`;

const Description = styled.textarea`
  margin: 5px;
  padding: 8px;
  height: 100%;
`;

const AddNotice = styled.button`
  border: 0;
  margin: 10px;
  color: #ffffff;
  background: #08a008;
  padding: 10px;
`;

class Form extends Component {
  state = {
    phone: '',
    name: '',
    descr: '',
  };

  handleChange = (event) => {
    const { target } = event;
    const { name } = target;

    this.setState({
      [name]: target.value,
    });
  };

  handleSubmit = (event) => {
    const id = localStorage.getItem('id');
    localStorage.setItem('id', Number(id) + 1);
    const notice = { ...this.state, id: localStorage.getItem('id') };
    const localNotices = JSON.parse(localStorage.getItem('Notices'));
    localStorage.setItem('Notices', JSON.stringify([...localNotices, notice]));

    this.props.addNotice(JSON.parse(localStorage.getItem('Notices')));
    this.props.closeModal();
    event.preventDefault();
  };

  render() {
    const { phone, name, descr } = this.state;
    return (
      <NoticeForm>
        <Name
          name="name"
          type="text"
          maxLength="100"
          value={name}
          onChange={this.handleChange}
          placeholder="Название"
        />
        <Mobile
          name="phone"
          value={phone}
          onChange={this.handleChange}
          mask="+7 (999) 999-99-99"
          placeholder="Мобильный телефон"
          maskChar=""
        />
        <Description
          name="descr"
          maxLength="300"
          value={descr}
          onChange={this.handleChange}
          placeholder="Описание"
        />
        <AddNotice type="submit" onClick={this.handleSubmit} disabled={!phone || !name || !descr}>
          Добавить
        </AddNotice>
      </NoticeForm>
    );
  }
}

Form.propTypes = {
  addNotice: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Form;
