<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <!-- To make this contact form work, create your free access key from https://web3forms.com/
     Then you will get all form submissions in your email inbox. -->
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation"
    novalidate
  >
    <input
      type="hidden"
      name="access_key"
      value="0c1728cc-dd5c-4367-9f76-e30146c0dc61"
    />
    <!-- Create your free access key from https://web3forms.com/ -->
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="mb-5">
      <input
        type="text"
        placeholder="Your Name"
        required
        class="w-full px-4 py-3 border-2 text-amber-500 placeholder:text-purple-300 rounded-md outline-none focus:border-amber-500 border-purple-600 ring-gray-100 bg-gradient-to-r from-black to-indigo-950 focus:from-purple-600 focus:to-orange-500 focus:text-white"
        name="name"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your full name.
      </div>
    </div>
    <div class="mb-5">
      <input
        type="text"
        placeholder="Business Name"
        required
        class="w-full px-4 py-3 border-2 text-amber-500 placeholder:text-purple-300 rounded-md outline-none focus:border-amber-500 border-purple-600 ring-gray-100 bg-gradient-to-r from-black to-indigo-950 focus:from-purple-600 focus:to-orange-500 focus:text-white"
        name="nameBusiness"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide a business.
      </div>
    </div>

    <div class="mb-5">
      <input
        type="text"
        placeholder="Industry of Work"
        required
        class="w-full px-4 py-3 border-2 text-amber-500 placeholder:text-purple-300 rounded-md outline-none focus:border-amber-500 border-purple-600 ring-gray-100 bg-gradient-to-r from-black to-indigo-950 focus:from-purple-600 focus:to-orange-500 focus:text-white"
        name="nameBusiness"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide an indsutry.
      </div>
    </div>

    <div class="mb-5">
      <label for="email_address" class="sr-only">Email Address</label
      ><input
        id="email_address"
        type="email"
        placeholder="Email Address"
        name="email"
        required
        class="w-full px-4 py-3 border-2 text-amber-500 placeholder:text-purple-300 rounded-md outline-none focus:border-amber-500 border-purple-600 ring-gray-100 bg-gradient-to-r from-black to-indigo-950 focus:from-purple-600 focus:to-orange-500 focus:text-white"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your email address.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid email address.
      </div>
    </div>

    <div class="mb-5">
      <label for="phone_number" class="sr-only">Phone Number</label
      ><input
        id="phone_number"
        type="text"
        placeholder="Phone Number"
        name="phone_number"
        required
        class="w-full px-4 py-3 border-2 text-amber-500 placeholder:text-purple-300 rounded-md outline-none focus:border-amber-500 border-purple-600 ring-gray-100 bg-gradient-to-r from-black to-indigo-950 focus:from-purple-600 focus:to-orange-500 focus:text-white"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your phone number.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid phone number.
      </div>
    </div>

    <div class="mb-3">
      <textarea
        name="message"
        required
        placeholder="Tell us about your business and availability! Leave your phone number and we will call you during business hours!"
        class="w-full px-4 py-3 border-2 text-amber-500 placeholder:text-purple-300 rounded-md outline-none focus:border-amber-500 border-purple-600 ring-gray-100 bg-gradient-to-r from-black to-indigo-950 focus:from-purple-600 focus:to-orange-500 h-36 focus:text-white"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please enter your message.
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>Send Message</LandingButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
