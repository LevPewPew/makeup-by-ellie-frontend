import React from 'react';
import { useSelector } from 'react-redux';
import BtnCreateDoc from '../BtnCreateDoc/BtnCreateDoc';
import WorkForm from '../../components/WorkForm/WorkForm';
import ServiceForm from '../../components/ServiceForm/ServiceForm';
import QuestionForm from '../../components/QuestionForm/QuestionForm';

function FormContainer() {
  const createForm = useSelector((state) => state.adminDashReducer.createForm);

  return (
    <div className="FormContainer">
      <div className="select-form-btns">
        <BtnCreateDoc
          collection={'portfolio'}
        />
        <BtnCreateDoc
          collection={'services'}
        />
        <BtnCreateDoc
          collection={'questions'}
        />
        <BtnCreateDoc
          collection={'testimonials'}
        />
      </div>
      {
        createForm === 'portfolio' ?
        <WorkForm /> :
        createForm === 'services' ?
        <ServiceForm /> :
        createForm === 'questions' ?
        <QuestionForm /> :
        createForm === 'testimonials' ?
        <div>TESTIMONIALS PLACEHOLDER</div> :
        null
      }
    </div>
  )
}

export default FormContainer;

