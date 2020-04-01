import React, { useState } from "react";
import styled from "styled-components";

import OsloKommuneLogo from "../assets/oslo-kommune.logo";

const Container = styled.div`
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  max-width: 840px;
  margin: 0 auto;
`;

const FormHeader = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: flex-end;
`;

const Location = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 28px;
`;

const FormTitle = styled.h1`
  margin: 40px 0 0 0;
  font-size: 1.4rem;
  font-weight: 600;
`;

const FormDescription = styled.div`
  margin: 10px 0;
  text-size: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const InputHeader = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

const InputGroup = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  padding: 20px;
  background-color: #faf9fa;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #636363;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  margin-right: 40px;
`;

const TextInput = styled.input`
  height: 34px;
  width: 260px;
  font-size: 1rem;
  font-weight: 500;
  color: #2c2c2c;
  padding: 0px 4px;
  margin-top: 4px;
  border: solid 1px lightgrey;
`;

const SubmitButton = styled.button`
  height: 50px;
  width: 160px;
  font-size: 1rem;
  font-weight: 600;
  margin: 30px 0;
  border: 0;
  color: white;
  background-color: #2a2859;
`;

const intialForm = [
  {
    id: "smittefrakk",
    description: "Smittefrakk",
    currentQuantity: 0,
    estimatedNeed: 0
  },
  {
    id: "andedrettsvernFFP2",
    description: "Åndedrettsvern FFP2",
    currentQuantity: 0,
    estimatedNeed: 0
  },
  {
    id: "andedrettsvernFFP3",
    description: "Åndedrettsvern FFP3",
    currentQuantity: 0,
    estimatedNeed: 0
  },
  {
    id: "hansker",
    description: "Hansker: nitril, latex og vinyl",
    currentQuantity: 0,
    estimatedNeed: 0
  },
  {
    id: "oyebeskyttelse",
    description: "Øyebeskyttelse: visir og briller",
    currentQuantity: 0,
    estimatedNeed: 0
  },
  {
    id: "kirurgiskeMunnbind",
    description: "Kirurgiske munnbind",
    currentQuantity: 0,
    estimatedNeed: 0
  },
  {
    id: "kirurgiskeMunnbindVisir",
    description: "Kirurgiske munnbind med visir",
    currentQuantity: 0,
    estimatedNeed: 0
  },
  {
    id: "operasjonsluer",
    description: "Operasjonsluer/hetter",
    currentQuantity: 0,
    estimatedNeed: 0
  }
];

const FormPage = () => {
  const [form, setForm] = useState(intialForm);
  const [submitState, setSubmitState] = useState(false);

  const handleSubmit = () => {
    setSubmitState(true);
  };

  const handleInputChange = e => {
    const target = e.currentTarget;
    setForm({
      ...form,
      [target.name]: target.value
    });
  };

  const updateQuantity = e => {
    const target = e.currentTarget;
    setForm(prevState => {
      return prevState.map(obj => {
        if (obj.id === target.name) {
          return {
            ...obj,
            currentQuantity: target.value
          };
        }
        return obj;
      });
    });
  };

  const updateEstimatedNeed = e => {
    const target = e.currentTarget;
    setForm(prevState => {
      return prevState.map(obj => {
        if (obj.id === target.name) {
          return {
            ...obj,
            estimatedNeed: target.value
          };
        }
        return obj;
      });
    });
  };

  return (
    <Container>
      <FormHeader>
        <OsloKommuneLogo />
        <Location>Bydel Stovner</Location>
      </FormHeader>

      <FormTitle>Smittevernsutstyr - ukentlig rapport</FormTitle>
      {submitState ? (
        <div>HADETBRA</div>
      ) : (
        <>
          <FormDescription>
            Her skal du fylle inn antall i beholdning av hver enkelt
            produkt, ikke hele pakker. Bruk tall, ikke bokstaver. Dersom
            det er tomt skriver du 0. Du trenger ikke å avslutte med
            "stk". Bare skriv tallet.
          </FormDescription>
          <FormContainer>
            {form.map(equObj => {
              return (
                <FormGroup key={equObj.id}>
                  <InputHeader>{equObj.description} </InputHeader>
                  <InputGroup
                    style={{
                      display: "flex"
                    }}
                  >
                    <Label htmlFor={equObj.id}>
                      Beholdning per i dag
                      <TextInput
                        type="text"
                        name={equObj.id}
                        value={equObj.currentQuantity}
                        onChange={updateQuantity}
                      />
                    </Label>
                    <Label htmlFor={equObj.id}>
                      Forventet forbruk neste 7 dager
                      <TextInput
                        type="text"
                        name={equObj.id}
                        value={equObj.estimatedNeed}
                        onChange={updateEstimatedNeed}
                      />
                    </Label>
                  </InputGroup>
                </FormGroup>
              );
            })}
            <SubmitButton onClick={handleSubmit}>Send Inn</SubmitButton>
          </FormContainer>
        </>
      )}
    </Container>
  );
};

export default FormPage;
