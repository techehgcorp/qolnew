"use client";

import { useState } from "react";

const initialFormData = {
  zipCode: "",
  coverage: "",
  insurance: "",
  income: "",
  name: "",
  lastName: "",
  dob: "",
  address: "",
  state: "",
  email: "",
  phone: "",
};

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/saveToGoogleSheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your consultation request.");
      }

      setFormData(initialFormData);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Unable to send your consultation request.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="google-sheet-form">
      <div className="row gy-4">
        <div className="col-12">
          <input
            type="text"
            name="zipCode"
            className="form-control"
            placeholder="ZIP Code"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="coverage">
            Are you looking for individual or family coverage?
          </label>
          <select
            id="coverage"
            name="coverage"
            className="form-select"
            value={formData.coverage}
            onChange={handleChange}
            required
          >
            <option value="">Individual or Family Coverage?</option>
            <option value="individual">Individual</option>
            <option value="family">Family</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="insurance">
            What type of coverage are you looking for?
          </label>
          <select
            id="insurance"
            name="insurance"
            className="form-select"
            value={formData.insurance}
            onChange={handleChange}
            required
          >
            <option value="">Select any insurance</option>
            <option value="life">Life</option>
            <option value="health">Health</option>
            <option value="medicare">Medicare</option>
            <option value="accident">Accident</option>
            <option value="dental">Dental</option>
            <option value="vision">Vision</option>
            <option value="affordable-care-act">Affordable Care Act</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="income">
            What's your household income?
          </label>
          <select
            id="income"
            name="income"
            className="form-select"
            value={formData.income}
            onChange={handleChange}
            required
          >
            <option value="">Select Income Range</option>
            <option value="$0-$15,000">$0-$15,000</option>
            <option value="$15,001-$30,000">$15,001-$30,000</option>
            <option value="$30,001-$50,000">$30,001-$50,000</option>
            <option value="$50,001-$75,000">$50,001-$75,000</option>
            <option value="$75,000+">$75,000+</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">
            What's your name?
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your first name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="lastName">
            What's your last name?
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="dob">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="address">
            Home Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
          <small className="form-optional">*Optional</small>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="state">
            State
          </label>
          <select
            id="state"
            name="state"
            className="form-select"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <small className="form-optional">*Optional</small>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <small className="form-optional">*Optional</small>
        </div>
        <div className="col-12">
          <p className="form-disclaimer">
            You agree to receive recurring automated promotional text and email
            messages from QOL Insurance. Consent is not a condition of purchase.
            Reply HELP for help or STOP to cancel. Message and data rates may
            apply. View Privacy Policy and SMS Terms of Service. By submitting
            this form, you are consenting to receive marketing emails from QOL
            Insurance. You can revoke your consent to receive emails at any time
            by unsubscribing to emails at info@qolinsurance.com
          </p>
        </div>
        <div className="col-12">
          <div className={`loading${status === "loading" ? " d-block" : ""}`}>
            Loading
          </div>
          <div className={`error-message${status === "error" ? " d-block" : ""}`}>
            {errorMessage}
          </div>
          <div className={`sent-message${status === "success" ? " d-block" : ""}`}>
            Your consultation request has been sent. Thank you!
          </div>
          <button type="submit" className="btn-book" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Request Consultation"}
          </button>
        </div>
      </div>
    </form>
  );
}
