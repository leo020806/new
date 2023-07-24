package com.example.movie.Controller;

import java.io.Serializable;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.ml.evaluation.RegressionEvaluator;
import org.apache.spark.ml.recommendation.ALS;
import org.apache.spark.ml.recommendation.ALSModel;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SQLContext;
import org.junit.Test;


public class sparkRdd {

    @Test
    public void testCopyFromLocalFile(){
        SparkConf spark = new SparkConf().setMaster("local").setAppName("READ");
        JavaSparkContext ctx = new JavaSparkContext(spark);
//        JavaRDD lines = ctx.textFile("hdfs://hadoop3:8020/tags.csv");
        JavaRDD lines = ctx.textFile("file:///G://永劫无间//ml-25m/ratings.csv");
        System.out.println("dddddd" + " " + lines.count());
    }

}
