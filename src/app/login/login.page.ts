import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['',  Validators.required],
    })
  }

  ngOnInit() {
    
  }


  async login(){
    console.log(this.loginForm.value)
    
    const user = this.loginForm.value.user
    const password = this.loginForm.value.password

    const data = {
      "username": user,
      "password": password,
    }

    const url = "http://localhost:8000/obtain-token/"
    const post = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type":"application/json",
      }
    })
    const result = await post;
    console.log(result)

    if(result.status === 200){
      alert("LOGADO")

      const data = await result.json()
      const token = data.token
      
      sessionStorage.setItem("token", token)

      console.log("token:", token)
      this.router.navigate(["/tabs/tab1"])

    }
    else{
      alert("Usuário ou senha incorreto")
    }

  }
}
