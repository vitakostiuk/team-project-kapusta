import Section from '../common/Section';

const Balance = () => {
  return (
    <>
      <Section>
        <form>
          <label htmlFor="balance">Balance:</label>
          <input
            id="#balance"
            // className={s.input}
            type="text"
            name="name"
            // value={balance}
            // onChange={handleChange}
            placeholder="00.00 UAH"
            required
          />
          <button type="submit">Confirm</button>
        </form>
      </Section>
    </>
  );
};

export default Balance;
