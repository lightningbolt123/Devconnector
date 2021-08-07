import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profile';
import { connect } from 'react-redux';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        degree:'',
        school: '',
        fieldOfStudy: '',
        from: '',
        current: false,
        to: '',
        description: ''
    });

    const [displayToDate, toggleToDate] = useState(false);

    const {
        degree,
        school,
        fieldOfStudy,
        from,
        current,
        to,
        description
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    return (
        <section class="container">
        <h1 class="large text-primary">
        Add Education
        </h1>
        <p class="lead">
            <i class="fas fa-code-branch"></i> Add any school or bootcamp that you have attended
        </p>
        <small>* = required field</small>
        <form class="form" onSubmit={(e) => {
            e.preventDefault();
            addEducation(formData, history);
        }}>
            <div class="form-group">
            <input type="text" placeholder="* Degree" name="degree" value={degree} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <input type="text" placeholder="* School" name="school" value={school} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <input type="text" placeholder="Field Of Study" name="fieldOfStudy" value={fieldOfStudy} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <h4>From Date</h4>
            <input type="date" name="from" value={from} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <p><input type="checkbox" name="current" value={current} onChange={() => {
                setFormData({ current: !current });
                toggleToDate(!displayToDate);
            }} /> Current Degree</p>
            </div>
            <div class="form-group">
            <h4>To Date</h4>
            <input type="date" name="to" value={to} disabled={displayToDate ? 'disabled': '' } onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Job Description"
                value={description}
                onChange={(e) => onChange(e)}
            ></textarea>
            </div>
            <input type="submit" class="btn btn-primary my-1" />
            <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
        </form>
        </section>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(AddEducation);