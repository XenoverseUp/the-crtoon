import { Link } from "react-router-dom";

export default [
  {
    title: "What does LOREM mean?",
    content: (
      <p>
        ‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
        text) is dummy text that is not meant to mean anything. It is used as a
        placeholder in magazine layouts, for example, in order to give an
        impression of the finished document. The text is intentionally
        unintelligible so that the viewer is not distracted by the content. The
        language is not real Latin and even the first word ‘Lorem’ does not
        exist. It is said that the lorem ipsum text has been common among
        typesetters since the 16th century. (Source:{" "}
        <a href="https://www.wikipedia.org/">Wikipedia.com</a>).
      </p>
    ),
  },
  {
    title: "Where can I subscribe to your newsletter?",
    content: (
      <p>
        We often send out our newsletter with news and great offers. We will
        never disclose your data to third parties and you can unsubscribe from
        the newsletter at any time. <Link to="/subscribe">Subscribe here</Link>{" "}
        to our newsletter.
      </p>
    ),
  },
  {
    title: "Where can in edit my address?",
    content: (
      <p>
        If you created a new account after or while ordering you can edit both
        addresses (for billing and shipping) in your{" "}
        <Link to="/subscribe">customer account</Link>.
      </p>
    ),
  },
  {
    title: "Do I need to create an account to make an order?",
    content: (
      <>
        <p>
          No, you don’t have to create an account. But there are a few
          advantages if you create an account.
        </p>
        <ul>
          <li>
            You never have to enter your billing and shipping address again.
          </li>
          <li>
            Find all of your orders, subscriptions and addresses in your
            account.
          </li>
          <li>Download invoices of your orders.</li>
        </ul>
      </>
    ),
  },
  {
    title: "The number of issues per year has changed. Why?",
    content: (
      <>
        <p>
          Some of the magazines have only just been included in our range. At
          the beginning, we have to estimate the demand from our readers. We
          also have to check that more issues of the magazine will be published
          and that it won’t just disappear from the market after a short while,
          either for financial or other reasons.
        </p>
        <p>
          Please <Link to="/write-us">write to us</Link> if you would like to
          subscribe to your favourite magazine but you cannot find a
          subscription in our shop at present.
        </p>
      </>
    ),
  },
];
