import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Class from './Name.module.css'
import LocalStorage from '../../storage'

const Name = () => {

  const formik = useFormik({
    initialValues: {
      firstName: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Campo obligatorio")
    }),
    onSubmit: (datos) => {
      LocalStorage.setItem('firstName', datos.firstName)
    }
  })

  return (
    <div className={Class.mainContainer}>
      <div className={"card mb-3 " + Class.container}>
        <div className="card-body">
          <h5 className="card-title">¿Cuál es tu nombre?</h5>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><BiUserCircle /></span>
            <input
              name="firstName"
              aria-describedby="basic-addon1"
              class="form-control"
              onChange={ formik.handleChange }
              placeholder="Ingrese su nombre"
              type="text"
              value={ formik.values.firstName }
              style={{ borderColor: formik.touched.firstName && formik.errors.firstName ? "red" : null }}
            />
          </div>
          {
            formik.errors.firstName && formik.touched.firstName && <div className={Class.error}>{formik.errors.firstName}</div>
          }
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={ formik.handleSubmit }
        type="submit"
      >
        Siguiente
      </button>
    </div>
  )
}

export default Name