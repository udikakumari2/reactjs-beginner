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
    private Button add,sub1;
    private TextView answer;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        num1=(EditText) findViewById(R.id.n1);
        num2=(EditText) findViewById(R.id.n2);
       add=(Button) findViewById(R.id.btn);
        sub1=(Button) findViewById(R.id.btn1);
        answer=(TextView) findViewById(R.id.txt1);
        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                   int number1=Integer.parseInt(num1.getText().toString());
                int number2=Integer.parseInt(num2.getText().toString());
                int sum=number1+number2;

                answer.setText("Answer is : "+sum);

            }

        });
        sub1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int number1=Integer.parseInt(num1.getText().toString());
                int number2=Integer.parseInt(num2.getText().toString());
                int sub2=number1-number2;
                answer.setText("Substraction is : "+sub2);
            }
        });
    }
}