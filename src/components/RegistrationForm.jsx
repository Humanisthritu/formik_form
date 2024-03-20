import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


import { Formik } from "formik";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [initialValues, setInitialValues] = useState({
    employeeName: "",
    email: "",
    phone: "",
    isActive: "true",
    role: "",
    birthDate: ""
  });

  const [value, setValue] = React.useState(null);
  return (
    <>
      <Box>
        <Typography variant="h2">Registration Form</Typography>
        <Formik initialValues={initialValues}>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
            handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                sx={{ marginTop: "2rem" }}
                container
                columns={12}
                spacing={2}
              >
                <Grid xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="employeeName"
                    label="Employee Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    values={values.employeeName}
                  />
                </Grid>
                <Grid xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="email"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    values={values.email}
                  />
                </Grid>
                <Grid xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="phone"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    values={values.phone}
                    style={{
                      backgroundColor: "#f2e9e4",
                    }}
                  />
                </Grid>
                <Grid xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="isActive"
                    label="Active Status"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    values={values.isActive}
                    style={{
                      backgroundColor: "#f2e9e4",
                    }}
                  />
                </Grid>
                <Grid xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="role"
                    label="Role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    values={values.role}
                    style={{
                      backgroundColor: "#f2e9e4",
                    }}
                  />
                </Grid>

                
                <Grid xs={12} md={4}>
                <DateTimePicker
                    label={<p>Next Follow Up Date</p>}
                    views={['day', 'month', 'year', 'hours', 'minutes']}
                    sx={{ width: '100%' }}
                    value={new Date(values.birthDate)}
                    
                    
             
                  />
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default RegistrationForm;
