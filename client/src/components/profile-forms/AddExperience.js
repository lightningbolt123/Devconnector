import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profile';
import { connect } from 'react-redux';

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        title:'',
        company: '',
        location: '',
        from: '',
        current: false,
        to: '',
        description: ''
    });

    const [displayToDate, toggleToDate] = useState(false);

    const {
        title,
        company,
        location,
        from,
        current,
        to,
        description
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    return (
        <section class="container">
        <h1 class="large text-primary">
        Add An Experience
        </h1>
        <p class="lead">
            <i class="fas fa-code-branch"></i> Add any developer/programming
            positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form class="form" onSubmit={(e) => {
            e.preventDefault();
            addExperience(formData, history);
        }}>
            <div class="form-group">
            <input type="text" placeholder="* Job Title" name="title" value={title} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <input type="text" placeholder="* Company" name="company" value={company} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <h4>From Date</h4>
            <input type="date" name="from" value={from} onChange={(e) => onChange(e)} />
            </div>
            <div class="form-group">
            <p><input type="checkbox" name="current" value={current} onChange={() => {
                setFormData({ current: !current });
                toggleToDate(!displayToDate);
            }} /> Current Job</p>
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

AddExperience.propTypes = {
    addExprience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(AddExperience);