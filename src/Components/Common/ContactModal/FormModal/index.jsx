import React, { useState, useEffect } from "react";
import { FormModalWrapper } from "./FormModal.style";
import { useForm, Controller } from "react-hook-form";
import MyLink from "../../../Common/MyLink";
import { Checkbox, Input, message } from "antd";
import Loading from "./Loading";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../../../Context/ModalContext/Context";

const FormModal = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1]
  );

  const onSubmit = async (values) => {
    console.log("yuborildi");
  };

  return (
    <FormModalWrapper>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="top">
            <h3>Call Me Now!</h3>
            <label className="label">
              <span className="label-text">Phone Number</span>
             
              <svg
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 0H0V22H13V0ZM6.5 21C5.67 21 5 20.33 5 19.5C5 18.67 5.67 18 6.5 18C7.33 18 8 18.67 8 19.5C8 20.33 7.33 21 6.5 21ZM11 17H2V3H11V17Z"
                    fill="#161A1D"
                  />
                </svg> 
              <input
                className="nameInput"
                type="text"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="err-text">This field is required</span>
              )}
            </label>
          </div>

          <div className="submit-btn-wrapper">
          <section class="buttons">
            <button type="submit" className="btn btn-4" >
              <span>Send Now</span>
            </button>
          </section>
            
          </div>
        </form>
      </div>
    </FormModalWrapper>
  );
};

export default FormModal;
