import { useState } from "react";
import COLOR from "../../constants/color";
import type { FormEvent } from 'react'
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
export default function ClientIntakeForm() {
  const [form, setForm] = useState<any>({});
const handleChange = (e: any) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const currentFormElement = event.currentTarget; // Save reference before async gap
  const formData = new FormData(currentFormElement);
  
  formData.append("access_key", '0e96f1ee-8a50-404c-baab-4973d5e0dbff');
  // console.log("Access Key:", formData.get("access_key")); 

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
  console.log("data", data);

  if (data.success) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Your message has been sent successfully!'
    }); 
    
    // Fix 1: Reset the React state object
    setForm({}); 
    
    // Fix 2: Use the saved reference to reset native input visuals
    currentFormElement.reset(); 
  } else {
    console.log("Error", data);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to send your message. Please try again.'
    });
  }
};



  return (
    <div className="bg-light py-5">
      <div className="container" style={{ maxWidth: "900px" }}>

        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3" style={{ color: COLOR.secondary }}>
          Client Intake Form
          </h1>
          <p className="text-muted fs-5">
            Take your time. This space is designed to understand your story with care, depth, and intention.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-4 p-4 p-md-5">

          {/* SECTION */}
          <Section title="Personal Information">
            <div style={{ display: 'none'}}>
              <Input  name="Client Intake Form" onChange={handleChange}  style={{ fontWeight: 'bold', fontSize: '24px' }} />
            </div>

            <Row>
              <Input label="Full Name" name="fullName" onChange={handleChange}  required/>
              <Input label="Email Address" name="email" onChange={handleChange} />
            </Row>

            <Row>
              <Input label="Phone Number" name="phone" onChange={handleChange}  required/>
              <Input label="Pronouns" name="pronouns" onChange={handleChange}  />
            </Row>

            <Input label="How did you hear about me?" name="referral" onChange={handleChange} />
          </Section>

          <Section title="Your Current Season">
            <Textarea label="What brought you here at this time?" name="reason" onChange={handleChange} />
            <Textarea label="Top 3 challenges you're facing" name="challenges" onChange={handleChange} />
            <Textarea label="How is this affecting your life?" name="impact" onChange={handleChange} />
            <Textarea label="What are you hoping to change?" name="goals" onChange={handleChange} />
          </Section>

          <Section title="Emotional & Mental Wellness">
            <Textarea label="Have you done coaching or therapy before?" name="therapyHistory" onChange={handleChange} />
            <Textarea label="Current support system" name="currentSupport" onChange={handleChange} />
            <Textarea label="Emotional patterns or triggers" name="triggers" onChange={handleChange} />
            <Textarea label="How do you respond under stress?" name="stressResponse" onChange={handleChange} />
          </Section>

          <Section title="Fitness & Nutrition (Optional)">
            <Textarea label="Fitness goals" name="fitnessGoals" onChange={handleChange} />
            <Textarea label="Nutrition goals" name="nutritionGoals" onChange={handleChange} />
            <Textarea label="Injuries / limitations" name="injuries" onChange={handleChange} />
          </Section>

          <Section title="Support Preferences">
            <Textarea label="What type of support feels best for you?" name="supportStyle" onChange={handleChange} />
            <Textarea label="What makes you feel safe and supported?" name="safetyNeeds" onChange={handleChange} />
          </Section>

          <Section title="Commitment">
            <Textarea label="Are you ready to commit to your growth?" name="commitment" onChange={handleChange} />
            <Textarea label="Anything else you'd like me to know?" name="extra" onChange={handleChange} />
          </Section>

          {/* BUTTON */}
          <div className="text-center mt-5">
            <button
              type="submit"
              className="btn btn-lg px-5 py-3 fw-semibold text-white rounded-pill"
              style={{
                backgroundColor: COLOR.primary,
                border: "none",
                borderRadius: "12px",
              }}
            >
              Submit Intake 
            </button>
            <p className="text-muted mt-3 small">
              Your responses are confidential and held with care.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}

/* ---------------- UI BUILDING BLOCKS ---------------- */

function Section({ title, children }: any) {
  return (
    <div className="mb-5">
      <h5
        className="fw-bold mb-3 pb-2"
        style={{
          color: "#0B2146",
          borderBottom: "1px solid #eee",
        }}
      >
        {title}
      </h5>
      {children}
    </div>
  );
}

function Row({ children }: any) {
  return <div className="row g-3 mb-2">{children}</div>;
}

function Input({ label, ...props }: any) {
  return (
    <div className="col-md-6">
      <label className="form-label small text-muted">{label}</label>
      <input className="form-control form-control-lg" {...props} />
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div className="mb-3">
      <label className="form-label small text-muted">{label}</label>
      <textarea className="form-control" rows={3} {...props} />
    </div>
  );
}