import { useForm } from "react-hook-form";
import './App.css';

function App() {
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="account"
        placeholder="Account"
        aria-invalid={errors.account ? "true" : "false"}
        {...register("account", { required: true })}
      />
      {errors.account && <span role="alert">請輸入帳號</span>}
      <input
        id="password"
        placeholder="Password"
        aria-invalid={errors.password ? "true" : "false"}
        {...register("password", { required: true })}
      />
      {errors.password && <span role="alert">請輸入密碼</span>}
      <input type="submit" />
    </form>
  );
}
export default App;
