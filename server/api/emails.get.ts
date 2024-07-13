import moment from "moment";
function getRelativeTime(dateString: string) {
  try {
    const date = moment(dateString);
    const now = moment();
    const diff = date.diff(now);

    return moment.duration(diff).humanize(true);
  } catch (error) {
    return dateString;
  }
}

export default defineEventHandler((event) => {
  const emailData = [
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b57",
      from: "jasimabduljamal@outlook.com",
      to: ["jasimabduljamal@outlook.com"],
      subject: "hello world!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b58",
      from: "jasimabduljamal@outlook.com",
      to: ["jasimabduljamal@outlook.com"],
      subject: "promotional",
      status: "bounced",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b59",
      from: "jasimabduljamal@outlook.com",
      to: ["jasim.jamal@perfagents.com"],
      subject: "product enquiry",
      status: "rejected",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b60",
      from: "jasimabduljamal@outlook.com",
      to: ["bioniczest@gmail"],
      subject: "hello world!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b61",
      from: "jasimabduljamal@outlook.com",
      to: ["jasimabduljamal@outlook.com"],
      subject: "hello world!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b62",
      from: "jasimabduljamal@outlook.com",
      to: ["jasimabduljamall@gmail.com"],
      subject: "test email",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b57",
      from: "jasimabduljamal@outlook.com",
      to: ["jasim.jamal@perfagents.com"],
      subject: "say hi!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b58",
      from: "jasimabduljamal@outlook.com",
      to: ["bioniczest@gmail"],
      subject: "hello world!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b57",
      from: "jasimabduljamal@outlook.com",
      to: ["jasimabduljamal@outlook.com"],
      subject: "hello world!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b58",
      from: "jasimabduljamal@outlook.com",
      to: ["jasimabduljamal@outlook.com"],
      subject: "test email",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b57",
      from: "jasimabduljamal@outlook.com",
      to: ["jasim.jamal@perfagents.com"],
      subject: "say hi!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b58",
      from: "jasimabduljamal@outlook.com",
      to: ["bioniczest@gmail"],
      subject: "hello world!",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
    {
      id: "f6f0da87-952a-4e5b-9cf7-728177550b58",
      from: "jasimabduljamal@outlook.com",
      to: ["jasimabduljamal@outlook.com"],
      subject: "test email",
      status: "delivered",
      sent_at: "2024-07-12T07:15:07.000Z",
    },
  ];
  const emailResponse = [];
  for (const email of emailData) {
    emailResponse.push({
      id: email.id,
      from: email.from,
      to: email.to[0],
      subject: email.subject,
      status: email.status,
      sent_at: getRelativeTime(email.sent_at),
    });
  }

  return emailResponse;
});
