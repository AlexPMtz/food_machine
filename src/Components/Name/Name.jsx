import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Class from './Name.module.css'
import LocalStorage from '../../storage'

const Name = () => {

  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Campo obligatorio")
    }),
    onSubmit: (datos) => {
      LocalStorage.setItem('firstName', datos.firstName);
      navigate("/foodMachine")
    }
  })

  return (
    <div className={Class.mainContainer}>
      <div className={"card mb-3 " + Class.container}>
        <div className="card-body">
          <h5 className="card-title">¿Cuál es tu nombre?</h5>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><BiUserCircle /></span>
              <input
                name="firstName"
                aria-describedby="basic-addon1"
                className="form-control"
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}
                placeholder="Ingrese su nombre"
                type="text"
                value={formik.values.firstName}
                style={{ borderColor: formik.touched.firstName && formik.errors.firstName ? "red" : null }}
              />
            </div>
            {
              formik.errors.firstName && formik.touched.firstName && <div className={Class.error}>{formik.errors.firstName}</div>
            }
            <button
              className="btn btn-outline-primary w-100 mt-3"
              onClick={formik.handleSubmit}
              type="submit"
            >
              Siguiente
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Name