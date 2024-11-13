import { useState } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import "../styles/NewDonationForm.css"; 

const NewDonationForm = () => {
  // State to track form inputs
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (you can extend this as needed)
    if (!category || !description || !amount || !date) {
      alert("Please fill out all fields");
      return;
    }

    // Here we would typically send the form data to an API or store it
    console.log({
      category,
      description,
      amount,
      date,
    });

    // Set submission success message using SweetAlert
    Swal.fire({
      title: "Donation Submitted!",
      text: "Your donation has been successfully recorded.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#4caf50",
      timer: 3000,
    });

    // Reset form (optional)
    setCategory("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="form-container">
      <Navbar />
      <h2 className="heading">New Donation</h2>
      {isSubmitted && <p className="success-message">Your donation has been submitted!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category" className="label">Donation Category</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
            className="input"
          >
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
            <option value="Medical">Medical</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="label">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
            placeholder="Enter a brief description of your donation"
            className="textarea"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="amount" className="label">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
            placeholder="Amount of donation"
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date" className="label">Donation Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
            className="input"
          />
        </div>

        <button type="submit" className="submit-button">Submit Donation</button>
      </form>
    </div>
  );
};

export default NewDonationForm;
