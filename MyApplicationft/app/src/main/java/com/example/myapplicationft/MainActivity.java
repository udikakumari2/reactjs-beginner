package com.example.myapplicationft;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import android.widget.TextView;
import android.widget.TextView;

import com.google.android.material.button.MaterialButton;

public class MainActivity extends AppCompatActivity {

    private Object TextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView username=(TextView) findViewById(R.id.username);
        TextView password=(TextView) findViewById(R.id.password);
        MaterialButton loginbtn=(MaterialButton) findViewById(R.id.login);
        //admin
      loginbtn.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
             if(username.getText().toS)
          }
      });





    }
}