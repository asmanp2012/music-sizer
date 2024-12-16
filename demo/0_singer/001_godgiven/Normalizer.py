import pandas as pd

# Reading the Excel file
file_path = '001_godgiven-high-frequence.xlsx'  # Replace with your Excel file path

df = pd.read_excel(file_path)

# Assume: The second column contains the frequency, and its name is "Frequency"
# The third column contains the sound name
frequency_column = 'Frequency'
name_column = 'Sound'

# The threshold distance for detecting the main sound (in Hz)
threshold = 10  # Frequency threshold for detecting repetition (in Hz)

# Create a new column for placing the main sound
df['Main Sound'] = None

# Filter sounds that are close to each other (based on the frequency distance)
def assign_main_sound(df, threshold):
    prev_sound = None
    group = []  # Group of similar frequencies
    for i in range(1, len(df)):
        current_frequency = df[frequency_column].iloc[i]
        prev_frequency = df[frequency_column].iloc[i - 1]
        
        # If the difference between frequencies is less than the threshold, they belong to the same main sound
        if abs(current_frequency - prev_frequency) <= threshold:
            group.append(i)  # Index of the similar row
        else:
            if group:
                # Calculate the mean frequency of the similar frequencies and add it to the new column
                mean_frequency = df[frequency_column].iloc[group].mean()
                main_sound_name = df[name_column].iloc[group[0]]  # Main sound name for this group
                for idx in group:
                    df.at[idx, 'Main Sound'] = f'{main_sound_name} ({mean_frequency:.2f})'
            group = [i]  # Start a new group
    # Consider the last group as well
    if group:
        mean_frequency = df[frequency_column].iloc[group].mean()
        main_sound_name = df[name_column].iloc[group[0]]
        for idx in group:
            df.at[idx, 'Main Sound'] = f'{main_sound_name} ({mean_frequency:.2f})'

# Call the function to assign the main sound
assign_main_sound(df, threshold)

# Display the processed data
print(df.head())

# Save the processed data to a new Excel file
output_file = 'processed_data.xlsx'
df.to_excel(output_file, index=False)
print(f"Processing complete. The output file has been saved as '{output_file}'.")
