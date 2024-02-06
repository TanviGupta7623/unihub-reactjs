
function LoginForm({handleLogin}) {
    const handleSubmit = (event) => {
      
      }

  const onSubmit = (data) => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          handleLogin()
        } else {
          // Handle login error here
        }
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username:
        <input type="text" name="username" ref={register({ required: true })} />
        {errors.username && <span>This field is required</span>}
      </label>
      <label>
        Password:
        <input type="password" name="password" ref={register({ required: true })} />
        {errors.password && <span>This field is required</span>}
      </label>
      <label>
        College Name:
        <input type="text" name="college" ref={register({ required: true })} />
        {errors.college && <span>This field is required</span>}
      </label>
      <label>
        Year of Study:
        <input type="number" name="year" ref={register({ required: true })} />
        {errors.year && <span>This field is required</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm