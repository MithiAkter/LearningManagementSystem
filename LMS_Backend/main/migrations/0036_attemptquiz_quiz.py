# Generated by Django 4.2.7 on 2023-12-05 14:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0035_attemptquiz_right_ans'),
    ]

    operations = [
        migrations.AddField(
            model_name='attemptquiz',
            name='quiz',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.quiz'),
        ),
    ]
