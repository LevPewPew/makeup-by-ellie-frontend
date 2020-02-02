import React from 'react';
import { useSelector } from 'react-redux';
import BtnCreateDoc from '../BtnCreateDoc/BtnCreateDoc';
import WorkForm from '../../components/WorkForm/WorkForm';
import ServiceForm from '../../components/ServiceForm/ServiceForm';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import { portfolioSubmitHandler } from '../../utils/forms/submitHandlers';
import { servicesSubmitHandler } from '../../utils/forms/submitHandlers';
import { questionsSubmitHandler } from '../../utils/forms/submitHandlers';
import './FormContainer.scss';

function FormContainer() {
  const workForm = useSelector((state) => state.form.WorkForm);
  const serviceForm = useSelector((state) => state.form.ServiceForm);
  const questionForm = useSelector((state) => state.form.QuestionForm);
  const createForm = useSelector((state) => state.adminDashReducer.createForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  async function handlePortfolioSubmit() {
    return portfolioSubmitHandler(workForm.values, editingForm);
  }

  async function handleServicesSubmit() {
    return servicesSubmitHandler(serviceForm.values, editingForm);
  }

  async function handleQuestionsSubmit() {
    return questionsSubmitHandler(questionForm.values, editingForm);
  }

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
      </div>
      {
        createForm === 'portfolio' ?
        <WorkForm
          onSubmit={handlePortfolioSubmit}
        /> :
        createForm === 'services' ?
        <ServiceForm
          onSubmit={handleServicesSubmit}
        /> :
        createForm === 'questions' ?
        <QuestionForm
          onSubmit={handleQuestionsSubmit}
        /> :
        null
      }
    </div>
  );
}

export default FormContainer;
