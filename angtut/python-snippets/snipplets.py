from collections import Counter
import time

start_time = time.time()

def all_unique(lst):
  return len(lst) == len(set(lst))

x = [1, 1, 2, 2, 3, 2, 3, 4, 5, 6]
y = [1, 2, 3, 4, 5]
print all_unique(x)
print all_unique(y)

###################################
def test_anagram(first, second):
  return Counter(first) == Counter(second)

def test_palindrome(text):
  return text == text[::-1]

print test_anagram("abcd3", "3acdb")


###################################

def byte_size(string):
  return len(string.encode('utf-8'))


print byte_size('Test')
print ('test' * 3)

###########################
def filter_falsy(listA):
  return list(filter(None, listA))


print filter_falsy([0, 1, False, 2, '', 3, 'a', 's', None, 34])

############################

def decapitalize(str):
  return str[:1].lower() + str[1:]

print decapitalize('DecapitalizeFirstLetterOfChain')
print test_palindrome('testseT')

print("Time taken: ", time.time() - start_time)
