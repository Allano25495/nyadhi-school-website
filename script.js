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
// DEFAULT NOTICES
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


// ------------------------------
// DEFAULT HOMEWORK - GRADE 9 TO GRADE 12
// ------------------------------
const defaultHomework = [
  {
    className: "Grade 9",
    subject: "Mathematics",
    task: "Complete the algebra assignment on linear equations and submit it on Friday.",
    dueDate: "2026-06-15"
  },
  {
    className: "Grade 10",
    subject: "English",
    task: "Write a one-page essay on the importance of discipline in school.",
    dueDate: "2026-06-16"
  },
  {
    className: "Grade 11",
    subject: "Biology",
    task: "Read the topic on cell structure and answer the revision questions.",
    dueDate: "2026-06-17"
  },
  {
    className: "Grade 12",
    subject: "Business Studies",
    task: "Prepare short notes on sources of business finance.",
    dueDate: "2026-06-18"
  }
];


// ------------------------------
// DEFAULT EVENTS
// ------------------------------
const defaultEvents = [
  {
    title: "Parents Meeting",
    description: "All parents are invited for a school meeting at 9:00 AM.",
    date: "2026-06-20"
  },
  {
    title: "Midterm Exams",
    description: "Midterm exams will begin on Monday. Learners are encouraged to revise early.",
    date: "2026-07-01"
  },
  {
    title: "Sports Day",
    description: "The school will hold a sports day for learners, teachers, and parents.",
    date: "2026-07-15"
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

function getEvents() {
  const events = localStorage.getItem("schoolEvents");

  if (events) {
    return JSON.parse(events);
  }

  return defaultEvents;
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

function saveEvents(events) {
  localStorage.setItem("schoolEvents", JSON.stringify(events));
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
// DISPLAY EVENTS ON events.html
// ------------------------------
const eventList = document.getElementById("eventList");

if (eventList) {
  const events = getEvents();

  eventList.innerHTML = "";

  events.forEach(function (eventItem) {
    const eventCard = document.createElement("div");
    eventCard.className = "notice-card";

    eventCard.innerHTML = `
      <h3>${eventItem.title}</h3>
      <p>${eventItem.description}</p>
      <small>Date: ${eventItem.date}</small>
    `;

    eventList.appendChild(eventCard);
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
// ADMIN: ADD EVENT
// ------------------------------
const eventForm = document.getElementById("eventForm");

if (eventForm) {
  eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("eventTitle").value;
    const description = document.getElementById("eventDescription").value;
    const date = document.getElementById("eventDate").value;

    const events = getEvents();

    const newEvent = {
      title: title,
      description: description,
      date: date
    };

    events.unshift(newEvent);
    saveEvents(events);

    alert("Event added successfully.");
    eventForm.reset();
  });
}


// ------------------------------
// ADMIN: CLEAR ALL DATA
// ------------------------------
const clearDataBtn = document.getElementById("clearDataBtn");

if (clearDataBtn) {
  clearDataBtn.addEventListener("click", function () {
    const confirmClear = confirm("Are you sure you want to clear all notices, homework, and events?");

    if (confirmClear) {
      localStorage.removeItem("schoolNotices");
      localStorage.removeItem("schoolHomework");
      localStorage.removeItem("schoolEvents");

      alert("All saved data has been cleared.");
    }
  });
}