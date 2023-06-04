// eslint-disable-next-line no-unused-vars
import personalInfoStyle from './PersonalInfo.module.css'

export default function PersonalInfo() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input name="name" />
      <label htmlFor="email">Email Adress</label>
      <input name="email" />
      <label htmlFor="phone">Phone Number</label>
      <input name="phone" />
    </form>
  );
}
