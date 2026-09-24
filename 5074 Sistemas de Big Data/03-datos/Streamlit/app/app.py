import streamlit as st
import pandas as pd

st.title("My Streamlit App")

st.write("Hello from Streamlit!")

data = pd.DataFrame({
    "Name": ["Ana", "Jon", "Maria"],
    "Age": [23, 31, 28]
})

st.dataframe(data)