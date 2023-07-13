package com.example.myapplicationbhn;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private EditText num1;
    private EditText num2;
    private Button add;
    private TextView answer;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        num1=(EditText) findViewById(R.id.n1);
        num2=(EditText) findViewById(R.id.n2);
       add=(Button) findViewById(R.id.btn);
        answer=(TextView) findViewById(R.id.txt1);
        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                    answer.setText(num1.+num2);
            }
        });
    }
}