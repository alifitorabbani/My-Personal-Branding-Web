# Project 07 — Air Quality Analysis with Machine Learning

**Repository:** `/Users/user/Analisis-Kualitas-Udara-dengan-Machine-Learning/`
**Confidence:** VERIFIED

## Executive Summary

A machine learning classification project analyzing air quality based on pollutant concentrations (PM2.5, PM10, NO2, SO2, CO, O3). Uses synthetic data (10,000 samples) or Kaggle Beijing dataset. Implements 5 classifiers: Decision Tree, K-Nearest Neighbors, Logistic Regression, Naive Bayes, and Genetic Algorithm-based modeling. Evaluated with accuracy, precision, recall, F1-score, confusion matrix, and cross-validation.

**Period:** December 2025 – January 2026
**Organization:** Telkom University
**Location:** Bandung, Indonesia
**Type:** Academic group project (Kelompok AI Kali — 4 members)

## Technology Stack (VERIFIED from notebook)

| Technology | Purpose |
|------------|---------|
| Python | Primary language |
| Pandas | Data manipulation |
| NumPy | Numerical computing |
| Scikit-learn | ML models, preprocessing, evaluation |
| Matplotlib | Visualization |
| Seaborn | Statistical visualization |
| Jupyter Notebook | Development environment |

## Dataset (VERIFIED from notebook)

**Option A — Synthetic data (default, `use_real_dataset = False`):**
- 10,000 samples (`n_samples = 10000`)
- 6 features: PM2.5, PM10, SO2, NO2, CO, O3
- Random seed 42 for reproducibility
- Normal distributions with clipping
- Target: `air_quality` = 'Baik' (PM2.5 ≤ 15), 'Sedang' (≤ 35), 'Tidak Sehat' (> 35)

**Option B — Real data (Kaggle Beijing Multi-Site Air Quality):**
- Downloaded via `opendatasets`
- Features dropped: No, year, month, day, hour, TEMP, PRES, DEWP, RAIN, wd, WSPM, station
- Same target classification logic

**Confidence:** Dataset source and structure VERIFIED from notebook code. Actual results NOT verified (notebook not executed).

## Machine Learning Pipeline (VERIFIED from notebook)

### Preprocessing
1. Missing value handling (`df.dropna()` for real data)
2. Feature selection (drop non-pollutant columns)
3. Target encoding (`LabelEncoder` or direct mapping)
4. Feature scaling (`StandardScaler`)
5. Train/test split (`train_test_split`)

### Models Implemented (VERIFIED from imports)

| Model | Class | Purpose |
|-------|-------|---------|
| Decision Tree | `DecisionTreeClassifier` | Tree-based classification |
| K-Nearest Neighbors | `KNeighborsClassifier` | Instance-based classification |
| Logistic Regression | `LogisticRegression` | Linear classification |
| Naive Bayes | `GaussianNB` | Probabilistic classification |
| Genetic Algorithm | Custom implementation | Rule-based or optimization |

### Evaluation Metrics (VERIFIED from imports)
- `classification_report`, `confusion_matrix`
- `accuracy_score`, `precision_score`, `recall_score`, `f1_score`
- `permutation_importance` (feature importance)
- `GridSearchCV` (hyperparameter tuning)
- `train_test_split` (data splitting)

### Genetic Algorithm (VERIFIED from notebook)

**Status:** Implementation present in notebook. Specific role (standalone classifier / feature selection / hyperparameter optimizer) requires notebook cell-by-cell analysis (not fully traced — classified as INFERRED).

## Personal Contribution (VERIFIED from notebook)

- **Member:** Alifito Rabbani Cahyono (NIM: 103012300477)
- **Group:** Kelompok AI Kali (4 members: Alifito, Satria, Ezra, Naufal)
- **Nature:** Group academic project — individual contributions not separable from notebook

## Limitations (VERIFIED from notebook)

- Synthetic data by default (not real-world measurements)
- No actual model performance results verified (notebook not executed)
- Genetic Algorithm implementation details not fully traced
- No cross-validation results documented in README

## Interview Preparation — Key Points

1. **Classification problem:** 3-class air quality (Baik / Sedang / Tidak Sehat) based on 6 pollutant features
2. **Five models compared:** Decision Tree, KNN, Logistic Regression, Naive Bayes, Genetic Algorithm
3. **Evaluation:** Accuracy, precision, recall, F1-score, confusion matrix
4. **Preprocessing:** Missing values, feature scaling, train/test split, LabelEncoder
5. **Synthetic vs real:** Can switch between synthetic (10K samples) and Kaggle Beijing data
6. **Honesty required:** Do not claim specific accuracy numbers without running the notebook
