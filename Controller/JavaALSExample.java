package com.example.movie.Controller;
//
//import org.apache.spark.SparkConf;
//import org.apache.spark.api.java.JavaSparkContext;
//import org.apache.spark.sql.Dataset;
//import org.apache.spark.sql.Row;
//import org.apache.spark.sql.SparkSession;
//
//// $example on$
//import java.io.Serializable;
//
//import org.apache.spark.api.java.JavaRDD;
//import org.apache.spark.ml.evaluation.RegressionEvaluator;
//import org.apache.spark.ml.recommendation.ALS;
//import org.apache.spark.ml.recommendation.ALSModel;
//import org.junit.Test;
//// $example off$
//
//public class JavaALSExample {
//
//    // $example on$
//    public static class Rating implements Serializable {
//        private int userId;
//        private int movieId;
//        private float rating;
//        private long timestamp;
//
//        public Rating() {}
//
//        public Rating(int userId, int movieId, float rating, long timestamp) {
//            this.userId = userId;
//            this.movieId = movieId;
//            this.rating = rating;
//            this.timestamp = timestamp;
//        }
//
//        public int getUserId() {
//            return userId;
//        }
//
//        public int getMovieId() {
//            return movieId;
//        }
//
//        public float getRating() {
//            return rating;
//        }
//
//        public long getTimestamp() {
//            return timestamp;
//        }
//
//        public static Rating parseRating(String str) {
//            String[] fields = str.split("::");
//
//
//            if (fields.length != 4) {
//                throw new IllegalArgumentException("Each line must contain 4 fields");
//            }
//            int userId = Integer.parseInt(fields[0]);
//            int movieId = Integer.parseInt(fields[1]);
//            float rating = Float.parseFloat(fields[2]);
//            long timestamp = Long.parseLong(fields[3]);
//            return new Rating(userId, movieId, rating, timestamp);
//        }
//    }
//    // $example off$
//
//    public static void main(String[] args) {
//        //java版本
//        SparkConf conf = new SparkConf();
//        conf.setMaster("local");    //本地单线程运行
//        conf.setAppName("testJob");
//        JavaSparkContext sc = new JavaSparkContext(conf);
//        SparkSession spark = SparkSession
//                .builder()
//                .appName("JavaALSExample")
//                .getOrCreate();
//
//        // $example on$
//        JavaRDD<Rating> ratingsRDD = spark
//                .read().textFile("file:///C://Users//cai//Desktop/file.txt").javaRDD()
//                .map(Rating::parseRating);
//        Dataset<Row> ratings = spark.createDataFrame(ratingsRDD, Rating.class);
//        Dataset<Row>[] splits = ratings.randomSplit(new double[]{0.8, 0.2});
//        Dataset<Row> training = splits[0];
//        Dataset<Row> test = splits[1];
//
//        // Build the recommendation model using ALS on the training data
//        ALS als = new ALS()
//                .setMaxIter(5)
//                .setRegParam(0.01)
//                .setUserCol("userId")
//                .setItemCol("movieId")
//                .setRatingCol("rating");
//        ALSModel model = als.fit(training);
//        model.userFactors();
//        model.itemFactors();
//
//        // Evaluate the model by computing the RMSE on the test data
//        // Note we set cold start strategy to 'drop' to ensure we don't get NaN evaluation metrics
//        model.setColdStartStrategy("drop");
//        Dataset<Row> predictions = model.transform(test);
//
//        RegressionEvaluator evaluator = new RegressionEvaluator()
//                .setMetricName("rmse")
//                .setLabelCol("rating")
//                .setPredictionCol("prediction");
//        Double rmse = evaluator.evaluate(predictions);
//        System.out.println("Root-mean-square error = " + rmse);
//
//        // Generate top 10 movie recommendations for each user
//        Dataset<Row> userRecs = model.recommendForAllUsers(10);
//        // Generate top 10 user recommendations for each movie
//        Dataset<Row> movieRecs = model.recommendForAllItems(10);
//
//        // Generate top 10 movie recommendations for a specified set of users
//
////    Dataset<Row> users = ratings.select(als.getUserCol()).distinct().limit(3);
////    Dataset<Row> userSubsetRecs = model.recommendForUserSubset(users, 10);
////    // Generate top 10 user recommendations for a specified set of movies
////    Dataset<Row> movies = ratings.select(als.getItemCol()).distinct().limit(3);
////    Dataset<Row> movieSubSetRecs = model.recommendForItemSubset(movies, 10);
//        // $example off$
//        userRecs.show();
//        movieRecs.show();
////    userSubsetRecs.show();
////    movieSubSetRecs.show();
//
//        spark.stop();
//    }
//}

//import java.io.File;
//import java.io.IOException;
//import java.util.Arrays;
//
//import org.apache.commons.io.FileUtils;
//import org.apache.commons.lang3.StringUtils;
//import org.apache.spark.SparkConf;
//import org.apache.spark.api.java.JavaDoubleRDD;
//import org.apache.spark.api.java.JavaPairRDD;
//import org.apache.spark.api.java.JavaRDD;
//import org.apache.spark.api.java.JavaSparkContext;
//import org.apache.spark.api.java.function.Function;
//import org.apache.spark.mllib.recommendation.ALS;
//import org.apache.spark.mllib.recommendation.MatrixFactorizationModel;
//import org.apache.spark.mllib.recommendation.Rating;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import scala.Tuple2;
//
//public class JavaALSExampleByMlLib {
//
//    private static final Logger log = LoggerFactory.getLogger(JavaALSExampleByMlLib.class);
//
//    public static void main(String[] args) {
//        SparkConf conf = new SparkConf().setAppName("JavaALSExample").setMaster("local");
//        JavaSparkContext jsc = new JavaSparkContext(conf);
//
//        JavaRDD<String> data = jsc.textFile("file:///C://Users//cai//Desktop/file.txt");
//
//        JavaRDD<Rating> ratings = data.map(new Function<String, Rating>() {
//            public Rating call(String s) {
//                String[] sarray = StringUtils.split(StringUtils.trim(s), "::");
//                return new Rating(Integer.parseInt(sarray[0]), Integer.parseInt(sarray[1]),
//                        Double.parseDouble(sarray[2]));
//            }
//        });
//
//        // Build the recommendation model using ALS
//        int rank = 10;
//        int numIterations = 6;
//        MatrixFactorizationModel model = ALS.train(JavaRDD.toRDD(ratings), rank, numIterations, 0.01);
//
//        // Evaluate the model on rating data
//        JavaRDD<Tuple2<Object, Object>> userProducts = ratings.map(new Function<Rating, Tuple2<Object, Object>>() {
//            public Tuple2<Object, Object> call(Rating r) {
//                return new Tuple2<Object, Object>(r.user(), r.product());
//            }
//        });
//
//        // 预测的评分
//        JavaPairRDD<Tuple2<Integer, Integer>, Double> predictions = JavaPairRDD
//                .fromJavaRDD(model.predict(JavaRDD.toRDD(userProducts)).toJavaRDD()
//                        .map(new Function<Rating, Tuple2<Tuple2<Integer, Integer>, Double>>() {
//                            public Tuple2<Tuple2<Integer, Integer>, Double> call(Rating r) {
//                                return new Tuple2<Tuple2<Integer, Integer>, Double>(
//                                        new Tuple2<Integer, Integer>(r.user(), r.product()), r.rating());
//                            }
//                        }));
//
//        JavaPairRDD<Tuple2<Integer, Integer>, Tuple2<Double, Double>> ratesAndPreds = JavaPairRDD
//                .fromJavaRDD(ratings.map(new Function<Rating, Tuple2<Tuple2<Integer, Integer>, Double>>() {
//                    public Tuple2<Tuple2<Integer, Integer>, Double> call(Rating r) {
//                        return new Tuple2<Tuple2<Integer, Integer>, Double>(
//                                new Tuple2<Integer, Integer>(r.user(), r.product()), r.rating());
//                    }
//                })).join(predictions);
//
//        // 得到按照用户ID排序后的评分列表 key:用户id
//        JavaPairRDD<Integer, Tuple2<Integer, Double>> fromJavaRDD = JavaPairRDD.fromJavaRDD(ratesAndPreds.map(
//                new Function<Tuple2<Tuple2<Integer, Integer>, Tuple2<Double, Double>>, Tuple2<Integer, Tuple2<Integer, Double>>>() {
//
//                    public Tuple2<Integer, Tuple2<Integer, Double>> call(
//                            Tuple2<Tuple2<Integer, Integer>, Tuple2<Double, Double>> t) throws Exception {
//                        return new Tuple2<Integer, Tuple2<Integer, Double>>(t._1._1,
//                                new Tuple2<Integer, Double>(t._1._2, t._2._2));
//                    }
//                })).sortByKey(false);
//
////		List<Tuple2<Integer,Tuple2<Integer,Double>>> list = fromJavaRDD.collect();
////		for(Tuple2<Integer,Tuple2<Integer,Double>> t:list){
////			System.out.println(t._1+":"+t._2._1+"===="+t._2._2);
////		}
//
//        JavaRDD<Tuple2<Double, Double>> ratesAndPredsValues = ratesAndPreds.values();
//
//        double MSE = JavaDoubleRDD.fromRDD(ratesAndPredsValues.map(new Function<Tuple2<Double, Double>, Object>() {
//            public Object call(Tuple2<Double, Double> pair) {
//                Double err = pair._1() - pair._2();
//                return err * err;
//            }
//        }).rdd()).mean();
//
//        try {
//            FileUtils.deleteDirectory(new File("result"));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        ratesAndPreds.repartition(1).saveAsTextFile("result/ratesAndPreds");
//
//        //为指定用户推荐10个商品(电影)
//        Rating[] recommendProducts = model.recommendProducts(2, 10);
//        log.info("get recommend result:{}",Arrays.toString(recommendProducts));
//
//        // 为所有用户推荐TOP N个物品
//        //model.recommendUsersForProducts(10);
//
//        // 为所有物品推荐TOP N个用户
//        //model.recommendProductsForUsers(10)
//
//        model.userFeatures().saveAsTextFile("result/userFea");
//        model.productFeatures().saveAsTextFile("result/productFea");
//        log.info("Mean Squared Error = {}" , MSE);
//
//    }
//
//}
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.function.Function;
import org.apache.spark.ml.evaluation.RegressionEvaluator;
import org.apache.spark.ml.recommendation.ALS;
import org.apache.spark.ml.recommendation.ALSModel;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SQLContext;
import org.apache.spark.sql.SaveMode;
import org.apache.spark.sql.types.DataTypes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;

/**
 * @author huangyueran
 * @category ALS-WR
 */
public class JavaALSExample {

    private static final Logger log = LoggerFactory.getLogger(JavaALSExampleByMl.class);

    public static class Rating implements Serializable {
        // 0::2::3::1424380312
        private int userId; // 0
        private int movieId; // 2
        private float rating; // 3
        private long timestamp; // 1424380312

        public Rating() {
        }

        public Rating(int userId, int movieId, float rating, long timestamp) {
            this.userId = userId;
            this.movieId = movieId;
            this.rating = rating;
            this.timestamp = timestamp;
        }

        public int getUserId() {
            return userId;
        }

        public int getMovieId() {
            return movieId;
        }

        public float getRating() {
            return rating;
        }

        public long getTimestamp() {
            return timestamp;
        }

        public static Rating parseRating(String str) {
            String[] fields = str.split("::");
            if (fields.length != 4) {
                throw new IllegalArgumentException("Each line must contain 4 fields");
            }
            int userId = Integer.parseInt(fields[0]);
            int movieId = Integer.parseInt(fields[1]);
            float rating = Float.parseFloat(fields[2]);
            long timestamp = Long.parseLong(fields[3]);
            return new Rating(userId, movieId, rating, timestamp);
        }
    }

    public static void main(String[] args) {
        SparkConf conf = new SparkConf().setAppName("JavaALSExample").setMaster("local");
        JavaSparkContext jsc = new JavaSparkContext(conf);
        SQLContext sqlContext = new SQLContext(jsc);

//                JavaRDD<Rating> ratingsRDD = jsc.textFile("file:///G://永劫无间//ml-25m/ratings.csv")
//                .map(new Function<String, Rating>() {
//                    public Rating call(String str) {
//                        return Rating.parseRating(str);
//                    }
//               });
//        StructType schema = createStructType(new StructField[]{
//                createStructField("id", IntegerType, false),
//                createStructField("hour", IntegerType, false),
//                createStructField("mobile", DoubleType, false),
//                createStructField("userFeatures", new VectorUDT(), false),
//                createStructField("clicked", DoubleType, false)
//        });

        Dataset<Row> DataFrame = sqlContext.read()
                .option("header", "true") //是否将第一行作为表头header
                .option("delimiter", ",") //字段分隔符
                .option("inferSchema", "true")
                .csv("file:///F://课程//大三上工程实践—数科/ml-latest/ratings.csv");
//        Dataset<Row> ratings = sqlContext.read().text("file:///G://永劫无间//ml-25m/ratings.csv").toDF();
//        ratings.show(false);
        System.out.println(DataFrame.count());
        System.out.println("mystr");
        DataFrame.show(false);
//        Dataset<Row> ratings = sqlContext.createDataFrame(ratingsRDD, Rating.class);
//        ratings.show();

//        JavaRDD<Rating> ratingsRDD = jsc.textFile("file:///C://Users//cai//Desktop/file.txt")
//                .map(new Function<String, Rating>() {
//                    public Rating call(String str) {
//                        return Rating.parseRating(str);
//                    }
//                });
//        Dataset<Row> ratings = sqlContext.createDataFrame(ratingsRDD, Rating.class);
//        System.out.println("2222222");
//        ratings.show(false);
        Dataset<Row>[] splits = DataFrame.randomSplit(new double[]{0.8, 0.2}); // //对数据进行分割，80%为训练样例，剩下的为测试样例。
        Dataset<Row> training = splits[0];
        Dataset<Row> test = splits[1];
        System.out.println("mystr");
        training.show();
        System.out.println("mystr");
        // Build the recommendation model using ALS on the training data
        ALS als = new ALS().setMaxIter(5) // 设置迭代次数
                .setRegParam(0.01) // //正则化参数，使每次迭代平滑一些，此数据集取0.1好像错误率低一些。
                .setUserCol("userId").
                setItemCol("movieId")
                .setRatingCol("rating");
        ALSModel model = als.fit(training); // //调用算法开始训练
        String str = "11111111";
        Dataset<Row> alluser = model.recommendForAllUsers(10);

        Dataset<Row>  usere = alluser.selectExpr("userID","inline(recommendations)");
//        Dataset<Row>  usere = alluser.select(expr("inline(c)"));recommendations
        usere.show(false);
        alluser.show(false);
        System.out.println("222222");

        usere.write()
                .format("jdbc")
                .option("url","jdbc:mysql://localhost:3306/movieproject")
                .option("dbtable","re")
                .option("user","root")
                .option("password","02081843")
                .mode(SaveMode.Append)
                .save();

        alluser.show(false);
        System.out.print("mystr"+str);

        Dataset<Row> itemFactors = model.itemFactors();
        itemFactors.show(1500);
        Dataset<Row> userFactors = model.userFactors();
        userFactors.show();

        // Evaluate the model by computing the RMSE on the test data
        Dataset<Row> rawPredictions = model.transform(test); //对测试数据进行预测
        Dataset<Row> predictions = rawPredictions
                .withColumn("rating", rawPredictions.col("rating").cast(DataTypes.DoubleType))
                .withColumn("prediction", rawPredictions.col("prediction").cast(DataTypes.DoubleType));

        RegressionEvaluator evaluator = new RegressionEvaluator().setMetricName("rmse").setLabelCol("rating")
                .setPredictionCol("prediction");
        Double rmse = evaluator.evaluate(predictions);
        log.info("Root-mean-square error = {} ", rmse);

        jsc.stop();
    }
}