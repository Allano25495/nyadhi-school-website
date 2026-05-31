// ------------------------------
// CONTACT FORM MESSAGE
// ------------------------------
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you. Your inquiry has been received.");
    contactForm.reset();
  });
}


// ------------------------------
// DEFAULT DATA
// This data appears if the user has not added anything yet.
// ------------------------------
const defaultNotices = [
  {
    title: "Opening Day Notice",
    message: "All learners are expected to report on Monday at 7:30 AM.",
    date: "2026-06-10"
  },
  {
    title: "Parents Meeting",
    message: "Parents are invited for a meeting on Friday at 9:00 AM.",
    date: "2026-06-14"
  }
];

const defaultHomework = [
  {
    className: "Grade 6",
    subject: "Mathematics",
    task: "Complete exercises on fractions and submit on Friday.",
    dueDate: "2026-06-15"
  },
  {
    className: "Grade 4",
    subject: "English",
    task: "Write a short composition about “My School”.",
    dueDate: "2026-06-16"
  }
];


// ------------------------------
// GET DATA FROM LOCAL STORAGE
// ------------------------------
function getNotices() {
  const notices = localStorage.getItem("schoolNotices");

  if (notices) {
    return JSON.parse(notices);
  }

  return defaultNotices;
}

function getHomework() {
  const homework = localStorage.getItem("schoolHomework");

  if (homework) {
    return JSON.parse(homework);
  }

  return defaultHomework;
}


// ------------------------------
// SAVE DATA TO LOCAL STORAGE
// ------------------------------
function saveNotices(notices) {
  localStorage.setItem("schoolNotices", JSON.stringify(notices));
}

function saveHomework(homework) {
  localStorage.setItem("schoolHomework", JSON.stringify(homework));
}


// ------------------------------
// DISPLAY NOTICES ON notices.html
// ------------------------------
const noticeList = document.getElementById("noticeList");

if (noticeList) {
  const notices = getNotices();

  noticeList.innerHTML = "";

  notices.forEach(function (notice) {
    const noticeCard = document.createElement("div");
    noticeCard.className = "notice-card";

    noticeCard.innerHTML = `
      <h3>${notice.title}</h3>
      <p>${notice.message}</p>
      <small>Date: ${notice.date}</small>
    `;

    noticeList.appendChild(noticeCard);
  });
}


// ------------------------------
// DISPLAY HOMEWORK ON homework.html
// ------------------------------
const homeworkList = document.getElementById("homeworkList");

if (homeworkList) {
  const homeworkItems = getHomework();

  homeworkList.innerHTML = "";

  homeworkItems.forEach(function (homework) {
    const homeworkCard = document.createElement("div");
    homeworkCard.className = "notice-card";

    homeworkCard.innerHTML = `
      <h3>${homework.className} - ${homework.subject}</h3>
      <p>${homework.task}</p>
      <small>Due Date: ${homework.dueDate}</small>
    `;

    homeworkList.appendChild(homeworkCard);
  });
}


// ------------------------------
// ADMIN: ADD NOTICE
// ------------------------------
const noticeForm = document.getElementById("noticeForm");

if (noticeForm) {
  noticeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("noticeTitle").value;
    const message = document.getElementById("noticeMessage").value;
    const date = document.getElementById("noticeDate").value;

    const notices = getNotices();

    const newNotice = {
      title: title,
      message: message,
      date: date
    };

    notices.unshift(newNotice);
    saveNotices(notices);

    alert("Notice added successfully.");
    noticeForm.reset();
  });
}


// ------------------------------
// ADMIN: ADD HOMEWORK
// ------------------------------
const homeworkForm = document.getElementById("homeworkForm");

if (homeworkForm) {
  homeworkForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const className = document.getElementById("homeworkClass").value;
    const subject = document.getElementById("homeworkSubject").value;
    const task = document.getElementById("homeworkTask").value;
    const dueDate = document.getElementById("homeworkDueDate").value;

    const homeworkItems = getHomework();

    const newHomework = {
      className: className,
      subject: subject,
      task: task,
      dueDate: dueDate
    };

    homeworkItems.unshift(newHomework);
    saveHomework(homeworkItems);

    alert("Homework added successfully.");
    homeworkForm.reset();
  });
}


// ------------------------------
// ADMIN: CLEAR ALL DATA
// ------------------------------
const clearDataBtn = document.getElementById("clearDataBtn");

if (clearDataBtn) {
  clearDataBtn.addEventListener("click", function () {
    const confirmClear = confirm("Are you sure you want to clear all notices and homework?");

    if (confirmClear) {
      localStorage.removeItem("schoolNotices");
      localStorage.removeItem("schoolHomework");

      alert("All saved data has been cleared.");
    }
  });
}