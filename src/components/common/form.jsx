import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data:{},
        errors:{}
     }

     validate=()=>{
        const options = {
            abortEarly: false
        };
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if(!error) return null;
        const errors={}
        for( let item of error.details)
            errors[item.path[0]]=item.message;        
        return errors;
    };
    validateProperty=(name,value)=>{
        const obj={};
        obj[name]=value;
        const sch={[name]:this.schema[name]};
        const {error} = Joi.validate(obj, sch);
        if(!error) return null;
        // console.log(error.details[0].message);
        return {[name]:error.details[0].message};
    };
    handleSubmit=e=>{
        e.preventDefault();
        const errors=this.validate();
        this.setState({errors:errors||{}})
        if(errors) return;
        this.doSubmit();
    }
    handleChange=e=>{
        var data={...this.state.data};
        data[e.currentTarget.name]=e.currentTarget.value;
        this.setState({data});

        const errors=this.validateProperty(e.currentTarget.name,e.currentTarget.value);
        this.setState({errors:errors||{}})
    }
    renderInput=(name,lable,type='text')=>{
        const {errors,data}=this.state;
        return <Input name={name} lable={lable} value={data[name]} type={type} onChange={this.handleChange} error={errors[name]}/>
    }
    renderSelect(name, label, options) {
        return (
          <Select
            name={name}
            label={label}
            options={options}
            selected={this.state.data[name]}
            errors={this.state.errors[name]}
            onChange={this.handleChange}
          />
        );
      }
    renderButton(text){       
        return <button disabled={this.validate()} className="btn btn-primary">{text}</button>;
    }
    
}

export default Form;