// Open modal and pre-fill product name
function openEnquiryModal(productName) {
    document.getElementById('product-name').value = productName;
    document.getElementById('enquiry-modal').style.display = 'flex';
}

// Close modal
function closeEnquiryModal() {
    document.getElementById('enquiry-modal').style.display = 'none';
}

// Optional: Handle form submission (for demonstration purposes)
document.getElementById('enquiry-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your enquiry has been submitted!');
    closeEnquiryModal();
});
